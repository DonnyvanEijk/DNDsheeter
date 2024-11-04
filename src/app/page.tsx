import { ThemeSwapper } from "@/components/ui/theme-swapper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <div className="flex flex-row dark:bg-zinc-900 bg-zinc-300 ">
      {/* Navdiv */}
          <div className="p-5">
                 {/* Theme swapping linksbovenin */}
             <ThemeSwapper/>
          </div>
               {/* De rest er naast!!! */}
          <div className="flex justify-between flex-row items-center w-full mx-5">
              <div>
                {/* Navitem */}
                yes
              </div>
              <div>
                Ja
              </div>
              <div>
                Nee
              </div>
          </div>
      </div>
           {/* page content*/}
      <div className=" w-full h-full">
            Hoi marcccc
      </div>
    </div>
   
  );
}
