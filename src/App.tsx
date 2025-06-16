import { ModeToggle } from "./components/mode-toggle"
import { ColorThemeToggle } from "./components/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "./shadcn/components/card"
import { Badge } from "./shadcn/components/badge"
import { RadioGroup, RadioGroupItem } from "./shadcn/components/radio-group"
import { Label } from "./shadcn/components/label"
import { Progress } from "./shadcn/components/progress"
import { Slider } from "./shadcn/components/slider"


function App() {
  return (
    <div className="w-full h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="flex flex-col justify-end p-4">
        <div className="header flex justify-between">
          <p className="text-2xl font-bold text-lime-500">shadcn-tailwind-theme-switcher</p>
          <div className="flex gap-2">
            <ModeToggle />
            <ColorThemeToggle />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Radio Group Component */}
          <Card>
              <CardHeader>
                <CardTitle>Radio Group</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Progress and Slider Components */}
            <Card>
              <CardHeader>
                <CardTitle>Progress & Slider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={33} />
                <Slider defaultValue={[50]} max={100} step={1} />
              </CardContent>
            </Card>

            {/* Badge Component */}
            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge>Badge</Badge>
              </CardContent>
            </Card>
        </div>
      </div>  
    </div>
  )
}

export default App
