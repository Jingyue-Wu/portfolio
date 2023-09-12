import { Transition } from "@headlessui/react";
import PropTypes from 'prop-types';

const FadeIn = ({ delay, children }) => (
    <Transition.Child
        enter={`transition-all ease-in-out duration-1000 ${delay}`}
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
        {children}
    </Transition.Child>
);

export default FadeIn;

FadeIn.propTypes = {
    delay: PropTypes.number.isRequired,
    children: PropTypes.instanceOf(Element).isRequired,
};
