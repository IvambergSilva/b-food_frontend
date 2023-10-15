import { Upload } from "lucide-react";
import { LabelAvatarContainer } from "./LabelAvatar.styles";
import { ChangeEvent, useState } from "react";

interface ILabelAvatarProps {
    handleAvatarImage: (image: File, url: string) => void
}

export default function LabelAvatar({ handleAvatarImage }: ILabelAvatarProps) {
    const [avatarURL, setAvatarURL] = useState('')
    const [avatarImage, setAvatarImage] = useState(null)

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        const image = event.target.files;

        if (!image || !image[0]) return;

        if (image[0].type === 'image/png' || image[0].type === 'image/jpeg') {
            setAvatarImage(image[0])
            const imageUrl = URL.createObjectURL(image[0])
            setAvatarURL(imageUrl)
            handleAvatarImage(image[0], imageUrl)
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