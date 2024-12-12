import { NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Validate API key
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key is missing' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { message } = body;

    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Create chat completion
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      stream: false,
    });

    // Extract and validate response
    const responseContent = completion.choices[0]?.message?.content;
    
    if (!responseContent) {
      return NextResponse.json(
        { error: 'No response generated from AI' },
        { status: 204 }
      );
    }

    // Return successful response
    return NextResponse.json({
      response: responseContent,
    });
  } catch (error) {
    // Log the full error for server-side debugging
    console.error('Groq API Error:', error);

    // Determine appropriate error response
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          error: 'Failed to process your request', 
          details: error.message 
        },
        { status: 500 }
      );
    }

    // Fallback for unexpected error types
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
