
import { Image } from "../../entities/image/image";


export interface ISearchImage {
    search: (id: string) => Promise<Image>
}