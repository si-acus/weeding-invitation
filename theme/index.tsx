import React from "react";
import { ConfigProvider } from "antd";

import { red } from '@ant-design/colors'

const withTheme = (node: JSX.Element) => (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: red.primary,
          },
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 16,
            },
          }}
        >
          {node}
        </ConfigProvider>
      </ConfigProvider>
    </>
  )

export default withTheme;