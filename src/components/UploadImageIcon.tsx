interface uploadImageProps {
  image: string | null,
  setImage: React.Dispatch<React.SetStateAction<string | null>>,
}

const UploadImageIcon = ({ image, setImage }: uploadImageProps) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file); // convert to base64 URL for preview
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      <div className="text-[10px] text-center flex gap-[1.5px] cursor-pointer">
        Drop your images
        <label className="text-[10px] hover:text-blue-500 cursor-pointer underline">
          here
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
    </div>
  );
}

export default UploadImageIcon;