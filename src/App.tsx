
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ChevronDownIcon from "./components/ChevronDownIcon"

  export default function Component() {
    return (
      <div className="flex flex-col h-screen w-full">
        <div className="flex items-center justify-center flex-1 bg-gradient-to-br from-[#0077B6] to-[#00B2FF]">
          <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-950">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="condition">
                  Medical Condition
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full" variant="outline">
                      Select Condition
                      <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>Select a Condition</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Diabetes</DropdownMenuItem>
                    <DropdownMenuItem>Thyroid</DropdownMenuItem>
                    <DropdownMenuItem>Blood Pressure</DropdownMenuItem>
                    <DropdownMenuItem>Obesity</DropdownMenuItem>
                    <DropdownMenuItem>High Cholesterol</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Label htmlFor="parameter1">Parameter 1</Label>
                <Input id="parameter1" placeholder="Enter Parameter 1" type="text" />
              </div>
              <div>
                <Label htmlFor="parameter2">Parameter 2</Label>
                <Input id="parameter2" placeholder="Enter Parameter 2" type="text" />
              </div>
              <div>
                <Label htmlFor="parameter3">Parameter 3</Label>
                <Input id="parameter3" placeholder="Enter Parameter 3" type="text" />
              </div>
              <div>
                <Label htmlFor="bm">BM</Label>
                <Input id="bm" placeholder="Enter BM" type="text" />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button type="submit" variant="default">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1] bg-[url('/placeholder.svg?height=1200&width=1920')] bg-cover bg-center opacity-10 dark:opacity-20" />
      </div>
    )
  }