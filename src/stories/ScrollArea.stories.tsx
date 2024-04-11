import type { ReactElement } from "react";
import React, { Fragment } from "react";
import { styled } from "@storybook/theming";
import { ScrollArea } from "@/app/components/ScrollArea";

const Block = styled.span({
  display: "inline-block",
  height: 40,
  width: 40,
  border: "1px solid silver",
  lineHeight: "40px",
  textAlign: "center",
  fontSize: 9,
});

const Wrapper = styled.div({
  whiteSpace: "nowrap",
  lineHeight: "0px",
  width: 500,
  height: 500,
  overflow: "hidden",
});

const list = (filler: (data: number) => ReactElement) => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push(filler(i));
  }

  return data;
};

export default {
  component: ScrollArea,
  decorators: [(storyFn: () => any) => <Wrapper>{storyFn()}</Wrapper>],
};

export const Vertical = () => (
  <ScrollArea vertical>
    {list((i) => (
      <Fragment key={i}>
        <Block>{i}</Block>
        <br />
      </Fragment>
    ))}
  </ScrollArea>
);

export const Horizontal = () => (
  <ScrollArea horizontal>
    <div style={{ padding: 5 }}>
      {list((i) => (
        <Block key={i}>{i}</Block>
      ))}
    </div>
  </ScrollArea>
);

export const Both = () => (
  <ScrollArea horizontal vertical>
    {list((i) => (
      <Fragment key={i}>
        {list((ii) => (
          <Block key={ii}>{ii * i}</Block>
        ))}
        <br />
      </Fragment>
    ))}
  </ScrollArea>
);

export const Neither = () => (
  <ScrollArea>
    {list((i) => (
      <Fragment key={i}>
        {list((ii) => (
          <Block key={ii}>{ii * i}</Block>
        ))}
        <br />
      </Fragment>
    ))}
  </ScrollArea>
);

export const WithOuterBorder = () => (
  <ScrollArea horizontal vertical>
    <div
      style={{
        width: 2000,
        height: 2000,
        border: "10px solid orangered",
        background: `url(https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4)`,
      }}
    />
  </ScrollArea>
);

export const CustomOffset = () => (
  <ScrollArea horizontal vertical offset={20}>
    {list((i) => (
      <Fragment key={i}>
        {list((ii) => (
          <Block key={ii}>{ii * i}</Block>
        ))}
        <br />
      </Fragment>
    ))}
  </ScrollArea>
);

export const CustomSize = () => (
  <ScrollArea horizontal vertical scrollbarSize={20}>
    {list((i) => (
      <Fragment key={i}>
        {list((ii) => (
          <Block key={ii}>{ii * i}</Block>
        ))}
        <br />
      </Fragment>
    ))}
  </ScrollArea>
);
