import React, { useCallback,useState } from 'react'
import type { IAppLoad, NsGraph } from '@antv/xflow'
import { XFlow, XFlowCanvas } from '@antv/xflow'
import { CanvasMiniMap, CanvasScaleToolbar, CanvasSnapline } from '@antv/xflow'
import { useGraphConfig } from './config-graph'
import { message } from 'antd'
import { getGraphData } from './mock'

import '@antv/xflow/dist/index.css'

export interface IProps {}

const Demo: React.FC<IProps> = () => {
  const graphConfig = useGraphConfig()
  const [graphData, setGraphData] = useState<NsGraph.IGraphData>()

  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <div>
      <XFlow
        className="xflow-user-container"
        graphData={graphData}
        graphLayout={{
          layoutType: 'dagre',
          layoutOptions: {
            type: 'dagre',
            rankdir: 'TB',
            nodesep: 60,
            ranksep: 40,
          },
        }}
        onLoad={() => setGraphData(getGraphData())}
        isAutoCenter={true}
      >
        <XFlowCanvas config={graphConfig}>
          <CanvasScaleToolbar position={{ top: 20, left: 20 }} />
          <CanvasMiniMap
            miniMapClz="xflow-custom-minimap"
            nodeFillColor="#ccc"
            minimapOptions={{
              width: 200,
              height: 200,
            }}
            position={{ top: 20, right: 20 }}
          />
          <CanvasSnapline color="#faad14" />
        </XFlowCanvas>
      </XFlow>
      <button onClick={handleClick} style={{ position: 'fixed', bottom: 20, right: 20 }}>
        Add Node
      </button>
    </div>
  )
}

export default Demo