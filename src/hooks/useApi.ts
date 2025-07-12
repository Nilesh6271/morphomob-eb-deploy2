import { useState, useCallback } from 'react';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Array<{ msg: string; param: string; location: string }>;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (url: string, options?: RequestInit) => Promise<ApiResponse<T>>;
  reset: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function useApi<T = unknown>(): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);

    try {
      const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const result = await response.json();

      if (response.ok) {
        setData(result.data || result);
        return result;
      } else {
        // Handle validation errors specifically
        if (result.errors && Array.isArray(result.errors)) {
          const errorMessages = result.errors.map((err: { msg: string; param: string; location: string }) => err.msg).join(', ');
          setError(errorMessages);
          return { success: false, message: errorMessages, errors: result.errors };
        }
        
        const errorMessage = result.message || `HTTP ${response.status}: ${response.statusText}`;
        setError(errorMessage);
        return { success: false, message: errorMessage };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Network error occurred';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, execute, reset };
}