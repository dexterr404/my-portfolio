import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

import Button from "../../components/ui/Button";
import BlogTitle from "./components/BlogTitle";
import BlogDivider from "./components/BlogDivider";
import BlogInfo from "./components/BlogInfo";
import BlogParagraph from "./components/BlogParagraph";
import BlogContent from "./components/BlogContent";
import Port1 from "./assets/SweetnessOfDebugging/PORT-1.png"
import Port2 from "./assets/SweetnessOfDebugging/PORT-2.png"
import Port3 from "./assets/SweetnessOfDebugging/PORT-3.png"

export default function SweetnessOfDebugging(){
    const navigate = useNavigate();

    return(
        <main className="max-w-4xl mx-auto bento-tile">
            <Button onClick={() => navigate(-1)} icon={MoveLeft} className="text-text-primary">
                Go Back
            </Button>
            <BlogTitle>Sweetness of Debugging</BlogTitle>
            <BlogInfo readTime="3 min" date="October 16, 2025"/>
            <BlogDivider />
            <BlogContent>
                <BlogParagraph className="indent-6 text-left">
                    Picture this: I've been coding for almost 24 hours straight. My eyes? Bloodshot and burning. My eyebags? They've got eyebags. But you know what? I didn't care. Because I was about to reach the holy grail of development—the deployment phase. That beautiful moment when your code goes live and you can finally tell yourself, "I did it. I can sleep now."
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    Then... BOOM! 💥
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    The web app won't connect to the server. My dreams of collapsing into bed? Shattered. My peace? Destroyed. My sanity? Questionable at this point.
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    So there I was, a caffeinated zombie, frantically sprinkling console.log() statements everywhere like they were magical debugging fairy dust. "Please," I whispered to my screen, "just tell me what's wrong."
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    Hours passed. HOURS. I checked the database connections. I verified the API endpoints. I questioned my entire career path. I even considered that maybe technology just hated me personally.
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    And then I saw it. The culprit. The villain of my story. A port mismatch. A FREAKING PORT MISMATCH. 😂
                </BlogParagraph>
                
                <div className="flex justify-center gap-4 py-4 max-sm:flex-col">
                    <img src={Port2} alt="Another view of the port settings" />
                    <img src={Port3} alt="Port configuration showing the mismatch" />
                </div>
                
                <BlogParagraph className="indent-6 text-left">
                    You know that feeling when you're looking for your phone while holding it? Or searching for your glasses when they're on your head? Yeah. That was me. Sitting there, staring at the screen, realizing I'd spent HOURS hunting down a bug that was basically screaming "I'M RIGHT HERE!" the entire time.
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    The small things like this sometimes make me question everything: How did I let that slide? Why didn't I catch it earlier? Am I even qualified to do this? And then I just started laughing—like, genuinely cackling at my desk like some sort of sleep-deprived mad scientist. Because what else can you do? 😅
                </BlogParagraph>
                
                <div className="flex justify-center gap-4 py-4 max-sm:flex-col">
                    <img src={Port2} alt="Comparison of port settings" />
                    <img src={Port1} alt="Fixed port configuration" />
                </div>
                
                <BlogParagraph className="indent-6 text-left">
                    But here's the thing—when I finally fixed it and saw my app come to life, connecting perfectly to the server like they were long-lost friends reuniting... man, that feeling was *chef's kiss*. 
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    It was pure, unfiltered euphoria. Better than coffee. Better than sleep (which I desperately needed). It was that sweet, sweet taste of victory that only comes after you've been beaten down by your own code for hours on end.
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    They say the harder something is to achieve, the sweeter it feels when you finally get there. And you know what? They're absolutely right. That tiny port number change became my entire happiness for the day. My masterpiece. My magnum opus.
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    So to all my fellow developers out there currently debugging at 3 AM, questioning their life choices: hang in there. Your port mismatch moment is coming. And when you find it? You're going to feel like you just conquered Mount Everest. 🏔️
                </BlogParagraph>
                
                <BlogParagraph className="indent-6 text-left">
                    Now if you'll excuse me, I have a date with my bed. We've been apart for far too long.
                </BlogParagraph>
            </BlogContent>
        </main>
    )
}