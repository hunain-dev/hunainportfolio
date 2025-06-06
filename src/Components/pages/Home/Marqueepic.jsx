import '@google/model-viewer';

const Marqueepic = () => {
  return (
    <>
      <div className="imageupper">
        <div className="Modelview">
          <model-viewer
            src="/Assets/Models/cube.glb"
            alt="3D Cube"
            auto-rotate
            camera-controls
            disable-zoom
          ></model-viewer>
        </div>
      </div>
    </>
  );
};

export default Marqueepic;
