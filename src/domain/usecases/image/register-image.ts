import { Image } from "../../entities/image/image"

export interface IRegisterImageUsecase {
    register: (image: Image) => Promise<Image>
}