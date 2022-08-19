import {useState, useEffect} from "react";

export function PreviewAvatar(){
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        //Cleanup func
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handleAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setAvatar(file);
        //fix: chọn 1 ảnh liên tiếp với onChange
        e.target.value=null;
    }

    return (
        <div>
            <input
                type="file"
                onChange={handleAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )
}