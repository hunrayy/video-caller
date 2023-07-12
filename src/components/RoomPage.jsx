import React from "react"
import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
const RoomPage = () => {

    const { roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 1757958631;
        const serverSecret = "474cae50897160fe21416980174fe248";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString() ,
            "Henry"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "copy Link",
                    url: `http://localhost:5173/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        })
    }
    return(
        <>
        <div className="home2">
            <div className="home3">
                <h2 style={{textAlign: "center"}}>Hunray's Video Calling App</h2>
                <div ref={myMeeting}  style={{display: "flex"}}/>
            </div>
        </div>
        </>
    )
}


export default RoomPage