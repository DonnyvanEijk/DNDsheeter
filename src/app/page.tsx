import { ThemeSwapper } from "@/components/ui/theme-swapper";
import { List, PlusCircle } from "lucide-react";
import Link from "next/link";


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
              <div className="font-bold text-xl ">
                {/* Navitem */}
                SHEETER
              </div>
              <div className="flex flex-row gap-4">
                <Link href="/create">
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <p>Create a character</p> <PlusCircle size="20"/>
                  </div>
                </Link>
                <Link href="/sheets">
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <p>Other sheets</p> <List size="20"/>
                  </div>
                </Link>
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
