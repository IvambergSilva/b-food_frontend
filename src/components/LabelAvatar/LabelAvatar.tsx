import { Upload } from "lucide-react";
import { LabelAvatarContainer } from "./LabelAvatar.styles";
import { ChangeEvent, useState } from "react";

interface ILabelAvatarProps {
    handleAvatarImage: (url: string) => void
}

export default function LabelAvatar({ handleAvatarImage }: ILabelAvatarProps) {
    const [avatarURL, setAvatarURL] = useState('')
    const [avatarImage, setAvatarImage] = useState(null)

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        const image = event.target.files;

        if (!image || !image[0]) return;

        if (image[0].type === 'image/png' || image[0].type === 'image/jpeg') {
            setAvatarImage(image[0])
            setAvatarURL(URL.createObjectURL(image[0]))
            handleAvatarImage(URL.createObjectURL(image[0]))
        }
    }

    return (
        <LabelAvatarContainer
            avatarImage={!!avatarImage}
        >
            <span><Upload /></span>
            <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFile}
            />
            {avatarURL && (
                <img
                    src={avatarURL}
                    alt="Foto do produto"
                />)}
        </LabelAvatarContainer>
    )
}
