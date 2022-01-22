// TEST MODAL DELTETE
import TestModal from "./testModal";
const [showTestModal, setShowTestModal] = useState(false);
const toogleShowTestOpen = () => {
  setShowTestModal((screenShoot) => !screenShoot);
};

// TEST MODAL DELTETE
<TestModal open={showTestModal} toogleShowTestOpen={toogleShowTestOpen}>
  <p>Children</p>
</TestModal>;
