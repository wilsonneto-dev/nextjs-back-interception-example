A simple project demonstrating how to intercept a returning navigation with next.js

Trying to help on Next discussions topic:
https://github.com/vercel/next.js/discussions/29047

---

```ts
// ...
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

const PopUp = () => {
  const router = useRouter();
  return (
    <div>
      are you sure to return? &nbsp;
      <input
        type="button"
        onClick={() => {
          router.beforePopState(() => true); // just to clear the callback
          router.back(); // execute the return navigation
        }}
        value="yes"
      />
    </div>
  );
};

const AnotherPage: NextPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(() => {
      setShowPopup(true); // just to show the "popup"
      history.go(1); // just to avoid URL route changing
      return false; // to stop the returning proccess
    });
  }, []);

  return (
    <div>
      {!!showPopup && <PopUp />}
      <p>
        Just imagine a page full of amazing contect here... (then try to return
        to the other page)
      </p>
    </div>
  );
};

export default AnotherPage;
// ...

```

I hope it helps you.
