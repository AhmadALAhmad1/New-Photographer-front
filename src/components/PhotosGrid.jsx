import React, { useEffect, useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { SideImage } from "./SideImage";
import { ImageForm } from "../Dashboard/DashboardCommon/ImageForm";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const PhotosGrid = ({ photos, itemEditable, onEdit }) => {
  const [layout, setLayouts] = useState(null);
  const [gridItems, setGridItems] = useState(photos);

  const handleModify = (newLayout, layout) => {
    setLayouts(newLayout);
    const items = gridItems.map((photo) => {
      const photoProps = newLayout.find((item) => item.i === photo.i) || photo;
      return { ...photoProps, image: photo.image };
    });
    setGridItems(items);
    onEdit?.(items);
  };

  useEffect(() => {
    setLayouts(photos);
  }, [photos]);

  return (
    <div>
      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        verticalCompact={true}
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 3, xs: 2, xxs: 1 }}
        // autoSize={true}
        // margin={{
        //   lg: [20, 20],
        //   md: [20, 20],
        //   sm: [20, 20],
        //   xs: [20, 20],
        //   xxs: [20, 20],
        // }}
        // cols={3}
        width={800}
        // isResizable={onEdit ? true : false}
        isDraggable={onEdit ? true : false}
      >
        {gridItems?.map((item) => {
          return (
            <div
              className="reactGridItem"
              key={item.i}
              data-grid={{
                x: item?.x,
                y: item?.y,
                w: item?.w,
                h: item?.h,
                i: item.i,
                minW: 2,
                maxW: Infinity,
                minH: 2,
                maxH: Infinity,
                isDraggable: onEdit ? true : false,
                // isResizable: onEdit ? true : false,
              }}
            >
              <div>
                <SideImage key={item.id} image={item.image} />
                {itemEditable && (
                  <div style={{ position: "fixed", top: 0, left: 0 }}>
                    <ImageForm visible imageSource={{ id: item.i }} />
                  </div>
                )}
                {/* <img
                  src={`data:image/jpeg;base64,${widget.image}`}
                  alt="section-one-background"
                  className="about-section-one-image"
                /> */}
              </div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};
