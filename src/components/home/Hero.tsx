import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";


export default function Hero(){
    return(
        <div className="mt-6 grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:justify-items-start">
            <div className="h-64 w-64 overflow-hidden rounded-full flex items-center justify-center">
                <Image 
                src="/images/profile/profile_picture.jpeg" 
                alt="profile"
                width={256}
                height={256}
                className="h-full w-full object-cover"
                loading="eager"/>
            </div>
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">Franz Christian Abella</h1>
                <p className="mt-6 text-justify"> I’m a full-stack developer who enjoys turning ideas into practical web and mobile applications. I’m currently exploring cloud services and AI to build smarter solutions. </p>
                <p className="mt-6 text-justify"> I work across the stack, from user interfaces to APIs, databases, and backend logic, while continuously improving my skills and exploring new technologies. </p>
                <div className="mt-6 flex flex-row gap-8 px-1">
                    <a href="https://github.com/ctrl-abella" className="h-10 flex items-center justify-center gap-2 font-bold">Github<FiGithub className="h-5 w-5"/></a>
                    <a href="https://www.linkedin.com/in/franzabella" className="h-10 flex items-center justify-center gap-2 font-bold">Linkedin<FiLinkedin className="h-5 w-5"/></a>
                </div>
            </div>
        </div>
    )   
}