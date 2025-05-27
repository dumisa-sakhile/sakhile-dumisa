import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="roboto-condensed-light text-sm ">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto corporis eum deleniti voluptate et ex animi dolorem quam accusamus!</p>
    </div>
  );
}
