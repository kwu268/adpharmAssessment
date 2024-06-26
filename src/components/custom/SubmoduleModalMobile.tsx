
import { Modal } from '@mantine/core';
import { SubmoduleQuestions } from '@/lib/data';
import SubmoduleCarousel from './SubmoduleCarousel';

type SubmoduleModalMobileProps = {
  moduleTitle: string
  opened: boolean;
  onClose: () => void;
  submodule: {
    [submodule: string]: SubmoduleQuestions;
  };
}

const SubmoduleModalMobile = ({opened, onClose, submodule, moduleTitle}: SubmoduleModalMobileProps) => {

  return (
    <>
      <Modal radius={'lg'} withCloseButton={false} opened={opened} onClose={onClose} centered>
        <SubmoduleCarousel submodule={submodule} />
      </Modal>

    </>
  );
}

export default SubmoduleModalMobile;