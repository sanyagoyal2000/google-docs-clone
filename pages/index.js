import Head from 'next/head'
import Header from "../components/Header";
import Login from "../components/Login";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image';
import { getSession, useSession } from "next-auth/client";
export default function Home() {
  const [session]=useSession();
  if(!session) return <Login/>;
  return (
    <div >
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section className="bg-[#FAF9F8] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex item-center justify-between py-6 ">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="border-0"
            >
                <Icon name="more_vert" size="3xl" color="gray"/>
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 curson-pointer hover:border-gray-400">
              <Image src='https://links.papareact.com/pju' layout="fill"/>
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
          </div>

        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex item-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray"/>


          </div>
        </div>
      </section>


      
    </div>
  )
}
