/* eslint-disable @next/next/no-img-element */
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Profile() {
  return (
    <>
      <header className="py-6 text-center bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
        <h1 className="text-3xl font-bold"></h1>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 space-y-3 text-center md:space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Alyssa Jewel</h1>
          <p className="font-medium tracking-wide text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Fitness Model. Athlete. Coffee Lover.
          </p>
        </div>
        <img
          alt="Avatar"
          className="rounded-full"
          height="150"
          src="../avatar.jpeg"
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
      </div>
      <div className="grid w-full gap-12 min-h-screen px-4 text-center md:gap-24 lg:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Portfolio</h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Welcome to my portfolio. Here you can find my latest projects and designs.
          </p>
        </div>
        <div className="flex w-full gap-4 md:gap-8 justify-center">
          <Card className="w-full">
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">RAW</h3>
                  <img 
                    alt="Avatar"
                    className="rounded-full "
                    height="150"
                    src="../RAW02.jpeg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Description for project one. This project was all about...
                  </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full gap-2 justify-center">
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2">
                  <h3 className="text-xl font-bold">MY PRODUCT</h3>
                    <img 
                      alt="Avatar"
                      className="rounded-full "
                      height="150"
                      src="../Train02.jpeg"
                      style={{
                        aspectRatio: "150/150",
                        objectFit: "cover",
                      }}
                      width="150"
                    /> 
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Description for project one. This project was all about...
                  </p>
                </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full gap-2 justify-center">
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardContent className="p-4 md:p-6">
            <div className="space-y-2">
                <h3 className="text-xl font-bold">REVIVE</h3>
                  <img 
                    alt="Avatar"
                    className="rounded-full "
                    height="150"
                    src="../avatar.jpeg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  /> 
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Description for project one. This project was all about...
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-center gap-2">
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <CardContent className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I offer a range of services to help you with your design needs.
            </p>
          </div>
        </div>
      </CardContent>
      <div className="grid w-full min-h-screen px-4 text-center md:gap-24 lg:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the services I offer. Let me know how I can help you.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-2">
                    <img 
                      alt="Avatar"
                      className="rounded-full "
                      height="150"
                      src="../Raw.jpeg"
                      style={{
                        aspectRatio: "150/150",
                        objectFit: "cover",
                      }}
                      width="150"
                    /> 
            <h3 className="text-2xl font-bold">Gym Services</h3>
            <p className="text-gray-500 dark:text-gray-400">Description for gym services. This service includes...</p>
          </div>
          <div className="space-y-2">
                    <img 
                      alt="Avatar"
                      className="rounded-full "
                      height="150"
                      src="../avatar.jpeg"
                      style={{
                        aspectRatio: "150/150",
                        objectFit: "cover",
                      }}
                      width="150"
                    /> 
            <h3 className="text-2xl font-bold">Personal Training</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Description for personal training. This service includes...
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-12">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to get started? Send me a message and I will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="grid w-full min-h-screen items-center justify-center py-12 gap-4 px-4 text-center md:py-24 lg:gap-10 lg:px-6">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="message">
              Message
            </Label>
            <Textarea className="min-h-[150px] resize-none" id="message" placeholder="Enter your message" />
          </div>
          <Button size="lg">Submit</Button>
        </div>
      </div>
      <footer className="w-full py-6 text-center bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
        <p>© 2024 Alyssa Jewlel. All rights reserved.</p>
      </footer>
    </>
  )
}
