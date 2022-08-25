import Button from "./button";

export default function Card ({title, body, createdAt,id ,handleDelete}){
    return(
        <div className="border p-5 h-72 w-full shadow-lg rounded-lg space-y-2">
            <div className="h-1/5">
                <h5 className="text-xl text-gray-600">{title}</h5>
                <p className="text-xs italic">{createdAt}</p>
            </div>
            <div className="text-justify h-3/5">{body}</div>

            <div className="grid grid-cols-2 gap-5">
                <Button onClick={handleDelete} value={id} type="button" title={"delete"} bg="red"/>
                <Button value={id} title='arsipkan' bg="blue"/>
            </div>
        </div>
    )
}