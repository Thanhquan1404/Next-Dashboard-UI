import { useRef } from "react"
import Image from "next/image"

interface Props {
  setAvatarFile?: React.Dispatch<React.SetStateAction<File>>,
  setAvatar?: React.Dispatch<React.SetStateAction<string>>,
  avatar?: string,
}
const UpLoadAvatar = ({setAvatarFile, avatar, setAvatar}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // WHEN CLICK ON AVATAR COMPONENT
  const handleClick = () => inputRef.current?.click();

  const handleFile = (file: File) => {
    if (!file || file.type !== "image/png") return;

    if (setAvatarFile) setAvatarFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      if (setAvatar) setAvatar(base64);
    };
    reader.readAsDataURL(file);
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  return (
    <div 
      className=''
    >
      <input
        ref={inputRef}
        type="file"
        accept=".png, .jpg"
        onChange={handleFileChange}
        className="hidden"
      >
      </input>
      <div className="cursor-pointer" onClick={() => handleClick()}>
        <Image src={`${avatar ? avatar : "/profile.png"}`} 
        alt="Lead avatar" 
        width={35} 
        height={35} 
        className="rounded-full"
        />
      </div>
      
    </div>
  )
}

export default UpLoadAvatar