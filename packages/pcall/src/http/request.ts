export type Params = Record<string, string>

export class LiarRequest extends Request {
  raw: Request
  path: string
  params: Params = {}
  query: URLSearchParams

  constructor(req: Request) {
    super(req)
    this.raw = req

    const url = new URL(req.url)
    this.path = clean(url.pathname)
    this.query = url.searchParams
  }
}

function clean(url: string) {
  return url.replace(/\/$/, '')
}

export function getOrigin(req: Request) {
  return {
    referer: req.headers.get('Referer'),
    origin: req.headers.get('Origin'),
    host: req.headers.get('Host'),
  }
}
