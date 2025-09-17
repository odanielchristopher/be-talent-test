import APIError from '../../errors/APIError';

export class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get<TResponse = unknown>(
    path: HttpClient.Path,
    options?: HttpClient.OptionsWithoutBody,
  ) {
    return this.makeRequest<TResponse>(path, { method: 'GET', ...options });
  }

  delete<TResponse = unknown>(
    path: HttpClient.Path,
    options?: HttpClient.OptionsWithoutBody,
  ) {
    return this.makeRequest<TResponse>(path, { method: 'DELETE', ...options });
  }

  post<TResponse = unknown, TBody = unknown>(
    path: HttpClient.Path,
    data: TBody,
    options: HttpClient.OptionsWithBody,
  ) {
    return this.makeRequest<TResponse, TBody>(path, {
      method: 'POST',
      body: data,
      ...options,
    });
  }

  put<TResponse = unknown, TBody = unknown>(
    path: HttpClient.Path,
    data: TBody,
    options: HttpClient.OptionsWithBody,
  ) {
    return this.makeRequest<TResponse, TBody>(path, {
      method: 'PUT',
      body: data,
      ...options,
    });
  }

  private async makeRequest<TResponse, TBody = any>(
    path: HttpClient.Path,
    options: HttpClient.Options<TBody>,
  ): Promise<TResponse> {
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value as string);
      });
    }

    // Query params
    let url = `${this.baseURL}${path}`;
    if (options.params) {
      const qs = new URLSearchParams(
        Object.entries(options.params).map(([k, v]) => [k, String(v)]),
      );

      url += `?${qs.toString()}`;
    }

    const response = await fetch(url, {
      method: options.method,
      body: options.body ? JSON.stringify(options.body) : undefined,
      headers,
    });

    let responseBody: unknown = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody as TResponse;
    }

    throw new APIError(response, responseBody);
  }
}

export namespace HttpClient {
  export type Path = string;

  export type Options<TBody = any> = {
    method: string;
    headers?: Record<string, string>;
    body?: TBody;
    params?: Record<string, string | number | boolean>;
  };

  export type OptionsWithoutBody = Omit<Options, 'body' | 'method'> & {
    body?: never;
  };

  export type OptionsWithBody = Omit<Options, 'body' | 'method'>;
}
