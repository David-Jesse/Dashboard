import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import EditUser from "@/components/EditUser";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import AppLineChart from "@/components/AppLineChart";

const SingleUserpage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ann</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User badge container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-semibold">Verified Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={32}
                    className="rounded-full bg-blue-500/30 border-l border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">User badges</h1>
                  <p className="text-sm text-accent-foreground">
                    This user has been verified.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={32}
                    className="rounded-full bg-green-800/30 border-l border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-accent-foreground">
                    The Admin badge gives you access to all the features and the
                    power to manage users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={32}
                    className="rounded-full bg-yellow-500/30 border-l border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-accent-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={32}
                    className="rounded-full bg-orange-500/30 border-l border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-accent-foreground">
                    This user is well known in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* User details */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                    <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-3 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={44} />
              </div>
              <div className="flex items-center gap-4">
                <span>Username</span>
                <span>Ann</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Email</span>
                <span>Ann@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Tel:</span>
                <span>12 33224 343</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Location</span>
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Role:</span>
                <Badge>Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Joined 2019.02.12
              </p>
            </div>
          </div>

          {/* Card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* User card container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-2">
                <Avatar className="size-12">
                    <AvatarImage src='https://avatars.githubusercontent.com/u/109041306?v=4' alt="@shadcn"/>
                    <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold">Ann</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas eveniet excepturi tempora numquam repudiandae laboriosam? Deserunt, non! Magnam cum aperiam eius a, optio atque velit consequuntur fuga perspiciatis dolores!</p>
          </div>
          {/* Chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
                <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserpage;
