_-_ Any html tag can be replaced by motion.tagName and can be animated using "animate" property

<motion.div
className="home container"
// animate={{ rotateZ: 180, opacity: 0.3, marginTop: 200 }}

>

<motion.h2 animate={{ fontSize: 50, color: "#ff299", x: -100, y: -100 }}>

- Initial postion

initial={{ y: -250 }} animate={{ y: -10 }}

<motion.button initial={{ x: "-3000vw" }} animate={{ x: 0 }}>

- We can control delay before animation and how much time to take for animation usingin transition porperty

transition={{ delay: 1, duration: 1 }}

// transition type can be spring, inertia, keyframes, tween, etc.
// default is spring for x and y motion. Different animation have differnt defualt transition type. Like for opacity, its tween
// stifness tell how bouny is spring. more value, higher bounce of spring

<motion.div
className="title"
initial={{ y: -250 }}
animate={{ y: -10 }}
transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 999,
        }} >

<h1>Pizza Joint</h1>
</motion.div>

- We can animate while hovering. Just use whileHover porperty instead of hover

        <motion.button whileHover={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>

         <motion.li
              whileHover={{ scale: 1.3, originX: "0", color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 900 }}
             />

- Variants =>
  For neat and clean code
  To propagate animation attributes down through the DOM

const containerVarients = {
hidden: {
opacity: 0,
x: "100vw",
},
visible: {
opacity: 1,
x: 0,
transition: { delay: 0.3 },
},
};

    <motion.div
      className="base container"
      // initial={{ x: "100vw" }}
      // animate={{ x: "0" }}
      // transition={{ delay: 0.3 }}
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >

    <motion.div
          variants={nextVatiants}
          // initial="hidden"
          // animate="visible"
          className="next"
        >

Another example of varients:-

const containerVarients = {
hidden: {
opacity: 0,
x: "100vw",
},
visible: {
opacity: 1,
x: 0,
transition: {
type: "spring",
mass: 0.3,
damping: 8,
delay: 0.3,
when: "beforeChildren",
staggerChildren: 0.4,
},
},
};

- Keyframes can be passed as an array

// Keyframes
const buttonVarients = {
visible: {
x: [0, -20, 20, -20, 20, 0],
transition: {
delay: 0.9,
},
},
hover: {
scale: [1.1, 1, 1.1, 1, 1.1, 1],
textShadow: "0px 0px 8px rgb(255, 255, 255)",
boxShadow: "0px 0px 8px rgb(255, 255, 255)",
},
};

- AnimatePresence

      <AnimatePresence>
        {visible && (
          <motion.h2 exit={{ y: -900 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>

- Animating Routes

      <AnimatePresence>
        <Routes location={location} key={location.key}>

            <motion.div
      className="home container"
      exit={{
        x: "-100vw",
        transition: { ease: "easeInOut" },
      }}

  >

- OnExitComplete

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setShowModal(false);
        }}

- Animating SVGs

        <motion.svg
          variants={svgVarients}
          initial="hidden"
          animate="visible"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVarients}
            fill="none"

- useCycle()

const Loader = () => {
const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
return (
<>
<motion.div
className="loader"
variants={loaderVariants}
animate={animation}
/>

<div onClick={() => cycleAnimation()}>Cycle Loader</div>
</>
);
};

- Dragging Items
  <motion.div
  drag
  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
  dragElastic={0.9}
  className="logo" >
