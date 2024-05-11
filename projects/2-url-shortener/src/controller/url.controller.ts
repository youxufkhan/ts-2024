import { Request, Response } from 'express';
import { urlService } from '../service';
import { Url } from '../entity/Url';

export const getUrl = async (req: Request, res: Response) => {
    const { hash } = req.params
    const url: Url | null = await urlService.getUrlByHash(hash)
    if (url === null) {
        return res.send({ success: false, message: "invalid url" })
    }
    res.redirect(url?.url)
};

export const createUrlHash = async (req: Request, res: Response) => {
    const { url } = req.body
    const newUrl: Url = await urlService.createUrlHash(url)
    res.send({
        success: true,
        shortUrl: `${req.protocol}://${req.hostname}/${newUrl.short_url}`
    })
};


