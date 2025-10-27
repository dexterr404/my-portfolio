import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

import Button from "../../components/ui/Button";
import BlogTitle from "./components/BlogTitle";
import BlogDivider from "./components/BlogDivider";
import BlogInfo from "./components/BlogInfo";
import BlogParagraph from "./components/BlogParagraph";
import BlogContent from "./components/BlogContent";
import BuildAppMeme from "./assets/TheIdeaThatWontLeaveYouAlone/build-app-meme.jpg";

export default function TheIdeaThatWontLeaveYouAlone() {
  const navigate = useNavigate();

  return (
    <main className="max-w-4xl mx-auto bento-tile">
      <Button onClick={() => navigate(-1)} icon={MoveLeft} className="text-text-primary">
        Go Back
      </Button>

      <BlogTitle>The App Idea That Won’t Leave You Alone</BlogTitle>
      <BlogInfo readTime="4 min" date="October 27, 2025" />
      <BlogDivider />

      <BlogContent>
        <BlogParagraph className="text-center font-medium">
          “The app idea that keeps you awake at 3 AM — yeah, that one. Let’s talk about it.”
        </BlogParagraph>

        <div className="flex justify-center py-4">
          <img src={BuildAppMeme} alt="Brain keeping you awake with app ideas meme" className="rounded-md" />
        </div>

        <BlogParagraph className="indent-6 text-left">
          You know that feeling, right? It's 3 AM. You should be sleeping. Instead, you're lying in bed thinking:
          <em>“I just want to watch videos with my friends who live across the country.”</em>
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          Not a Zoom call where someone shares their screen and it lags every 30 seconds.
          Not a sketchy website with pop-up ads everywhere.
          Not a “sync” feature that never actually syncs.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          Just… watch together. With chat. That’s it.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          The idea won’t leave you alone. You’re at work — “I could build that.” You’re making coffee — “It’s just React + WebSockets, right?”
          You’re watching Netflix — “If only I could watch this WITH someone…”
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          The idea infects your brain. And here’s the thing: you <strong>know</strong> you could build it.
          But you don’t start.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold">Why You Haven’t Built It Yet</BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          “Someone already built this.” Yeah, and it sucks.
          Discord? Laggy. Watch2Gether? Stuck in 2009. Netflix Party? Only for Netflix (duh).
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          “I’m not good enough yet.” You’re waiting to be “ready.”
          Truth bomb: you’ll never feel ready. I learned Supabase Realtime <em>by</em> building WRoom — not before it.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          “It needs to be perfect.” So it sits in your <code>ideas.txt</code> file next to 47 others.
          If you’re not cringing at version 1, you waited too long.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          “What if people laugh at it?” They will. Someone on X (Twitter) will say “lol just use Discord.”
          You know what’s worse than people laughing? <strong>Not having your app at all.</strong>
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold">The Truth Bomb</BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          I realized one night that the “perfect” watch party app didn’t exist because the perfect one
          would be the one I built <em>for myself</em>.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          The one with the features I wanted.
          The one with the UI I liked.
          The one without the crap I hated.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          I didn’t need permission. I didn’t need to be an expert.
          I just needed to stop making excuses and open VS Code.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold">“I Just Want to Watch Any Video With Someone.”</BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          That was it. That was the whole idea.
          Not a social network. Not a streaming platform.
          Just a room. A chat. A video player.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          And now, I use it almost every day — because I built the thing I wished existed.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold">Your Permission Slip</BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          You don’t need a CS degree. You don’t need VC funding.
          You just need that idea that won’t leave you alone, one free evening,
          and the willingness to build something ugly that works.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold">The Challenge</BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          Stop thinking. Stop planning. Stop researching the “best” stack.
          Just open your code editor. Build the bare minimum version.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          For me, it was: a room you can create ✅ a chat that works ✅ a video player ✅  
          That’s version 0.1 — and it’s enough.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold">Build It Because You Need It</BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          The idea that haunts you is there for a reason.
          It’s not going away until you build it.
          Not for users. Not for clout. For you.
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left">
          You have the power to make it exist. So… what are you waiting for?
        </BlogParagraph>

        <BlogParagraph className="indent-6 text-left font-semibold italic">
          What’s the app idea that won’t leave you alone?
        </BlogParagraph>
      </BlogContent>
    </main>
  );
}
