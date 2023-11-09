import { Modal, Button, Carousel, Tag } from 'antd';
      import { useState } from 'react';

      const ProjectModal = ({ isModalOpen, handleCloseModal, modalContent }:any) => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const handleImageChange = (index) => {
          setCurrentImageIndex(index);
        };

        return (
          <Modal
            visible={isModalOpen}
            onCancel={handleCloseModal}
            footer={null}
            style={{ borderRadius: '2px' }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Carousel
                className="w-full md:w-1/2"
                afterChange={handleImageChange}
                autoplay
              >
                {modalContent?.images?.map((image, index) => (
                  <img key={index} src={image} alt={modalContent.title} />
                ))}
              </Carousel>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold">{modalContent.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{modalContent.description}</p>
                <div className="flex flex-wrap mt-4">
                  {modalContent?.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </div>
                <div className="flex mt-4">
                  <Button type="primary" href={modalContent.siteUrl} target="_blank">
                    Visit Site
                  </Button>
                  <Button
                    className="ml-4"
                    href={modalContent.codeUrl}
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {modalContent?.images?.map((image, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full mx-2 cursor-pointer ${
                    index === currentImageIndex ? 'bg-gray-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleImageChange(index)}
                ></div>
              ))}
            </div>
          </Modal>
        );
      };

      export default ProjectModal;