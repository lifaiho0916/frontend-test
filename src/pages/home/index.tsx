import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { setOption, setDiscountCode, setCodeValidation, AddComment } from "store/slices/mainSlice";
import { store } from "store";
import toast from 'react-hot-toast';

const Home = () => {
    const pattern = /^DISCOUNT\d{4}$/;
    const { option, discountCode, codeValidation, comments } = useSelector((state: RootState) => state.main);
    const [newCode, setNewCode] = React.useState<null | string>(null);
    const [comment, setComment] = React.useState<string>("");

    const handleOptionSelect = (value: string) => {
        store.dispatch(setOption(value));
        toast.success(`Option ${value} is selected.`);
    }

    const handleDiscountCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        store.dispatch(setDiscountCode(value));
        store.dispatch(setCodeValidation(pattern.test(value)));
    }

    const handleNewCode = () => {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        setNewCode(`DISCOUNT${randomNumber}`);
        toast.success("New Code has been generated successfully.");
    }

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    const handleAddComment = () => {
        if (comment === "") {
            toast.error("Please type comment.");
        } else {
            store.dispatch(AddComment(comment));
            setComment("");
            toast.success("New comment has been added successfully.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-2">
                <div className="my-2 max-w-[400px] w-full">
                    <h1 className="text-xl font-bold mb-2">1. Radio Selection Buttons</h1>
                    <div className="py-1">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Option A</span>
                                <input type="radio" name="options" className="radio checked:bg-red-500" onClick={() => handleOptionSelect("A")} checked={option === "A"} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Option B</span>
                                <input type="radio" name="options" className="radio checked:bg-blue-500" onClick={() => handleOptionSelect("B")} checked={option === "B"} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Option C</span>
                                <input type="radio" name="options" className="radio checked:bg-green-500" onClick={() => handleOptionSelect("C")} checked={option === "C"} />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="my-2 max-w-[400px] w-full">
                    <h1 className="text-xl font-bold mb-2">2. Text Box for Discount Code Entry</h1>
                    <div className="py-1">
                        <input type="text" placeholder="Type here" value={discountCode} className="input input-bordered w-full" onChange={handleDiscountCodeChange} />
                    </div>
                    {!codeValidation ?
                        <label className="text-red-500 px-1">
                            {discountCode !== "" ?
                                "The code pattern is incorrect." :
                                "Please input valid code."
                            }
                        </label> :
                        <label className="text-green-500">
                            {discountCode !== "" ? "The code pattern is correct." : ""}
                        </label>
                    }
                </div>

                <div className="my-2 max-w-[400px] w-full">
                    <h1 className="text-xl font-bold mb-2">3. Button to Simulate Discount Code Generation</h1>
                    <div className="py-1">
                        <button className="btn btn-sm btn-primary" onClick={handleNewCode}>New Code</button>
                        <label className="font-bold ms-2">{newCode}</label>
                    </div>
                </div>

                <div className="my-2 max-w-[400px] w-full">
                    <h1 className="text-xl font-bold mb-2">4. Basic Note Field</h1>
                    <div className="py-1">
                        <textarea className="textarea textarea-bordered w-full" placeholder="Please type comment..." onChange={handleCommentChange} value={comment}></textarea>
                        <button className="btn btn-sm btn-primary float-right mt-1" onClick={handleAddComment}>Add Comment</button>
                    </div>
                    <div className="mt-7">
                        {comments.map((com: string, index: number) => (
                            <div className="py-2" key={index}>
                                <div className="chat chat-start max-w-[400px] w-full">
                                    <div className="chat-bubble">{com}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;