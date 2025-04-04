import React, { useState } from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ReviewCard = (props) => {
    const [user] = useState("SumanthKoppula");

    return (
        <div className="my-3 flex flex-col gap-3 pb-4 border-b border-gray-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full">
                        <img
                            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                            alt="avatar"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">{user}</h3>
                        <small className="text-gray-500">
                            5 Reviews &#8226; 7 Followers
                        </small>
                    </div>
                </div>
                <button className="text-zomato-400 border border-zomato-400 y-2 rounded-lg px-4">
                    Follow
                </button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    {props.rating <= 3.5 ? (
                        <span className="text-white text-xs bg-red-700 gap-2 px-2 py-1 rounded-lg flex items-center">
                            {props.rating} <TiStarFullOutline />
                        </span>
                    ) : (
                        <span className="text-white text-xs bg-green-700 gap-2 px-2 py-1 rounded-lg flex items-center">
                            {props.rating} <TiStarFullOutline />
                        </span>
                    )
                    }
                    <h5 className="font-regular uppercase">
                        {props.isRestaurantReview ? "Dining" : "Delivery"}
                    </h5>
                    <small className="text-gray-500">
                        {dayjs(props.createdAt).fromNow()}
                    </small>
                </div>
                <div className="w-full">
                    <p className="w-full text-gray-600 text-base">
                        {props.reviewText}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default ReviewCard
