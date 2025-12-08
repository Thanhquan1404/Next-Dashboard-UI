"use client";

import { useRef } from "react";
import Image from "next/image";

interface Props {
  setAvatarFile?: React.Dispatch<React.SetStateAction<File | undefined>>;
  setAvatar?: React.Dispatch<React.SetStateAction<string>>;
  avatar?: string;
}

const UpLoadAvatar = ({ setAvatarFile, avatar, setAvatar }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFile = (file: File) => {
    if (!["image/png", "image/jpg", "image/jpeg"].includes(file.type)) return;

    setAvatarFile?.(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setAvatar?.(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        className="cursor-pointer"
        onClick={handleClick}
        aria-label="Upload avatar"
      >
        <Image
          src={avatar || "/profile.png"}
          alt="Lead avatar"
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default UpLoadAvatar;
