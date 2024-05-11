import { nanoid } from 'nanoid'
import { Url } from '../entity/Url'

class UrlService {
  async getUrlByHash(hash: string): Promise<Url | null> {
    const url: (Url | null) = await Url.findOneBy({ short_url: hash })
    return url;
  }

  async createUrlHash(url: string): Promise<Url> {
    const existUrl: (Url | null) = await Url.findOneBy({ url })
    if (existUrl) return existUrl;
    const hash: string = nanoid()
    const newUrl = new Url()
    newUrl.short_url = hash;
    newUrl.url = url;
    return await newUrl.save()
  }
}

const urlService = new UrlService();
export default urlService;
