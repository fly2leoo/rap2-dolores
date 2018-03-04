import React from 'react'
import { serve } from '../../relatives/services/constant'
import './API.css'

const ExampleJQuery = () => (
  <div>
    <ul>
      <li>先引入jQuery插件</li>
      <li>再引入基础插件</li>
      <li>最后引入RAP jQuery插件</li>
    </ul>
    <h4>示例代码</h4>
    <pre className='code-example'>
      {
        '<script src="jquery.min.js"></script>\n' +
        '<script src="http://rap2api.taobao.org/app/plugin/:projectId"></script>\n' +
        '<script src="http://rap2api.taobao.org/libs/jquery.rap.js"></script>\n' +
        '$.ajax({\n' +
        '    url : \'/example/1501049256513\', // 自动拦截\n' +
        '    method : \'GET\',\n' +
        '    dataType : \'JSON\',\n' +
        '    success : function(data) {\n' +
        '      // 返回根据RAP文档及规则生成的mock数据\n' +
        '      $(\'#result\').html(JSON.stringify(data))\n' +
        '    }\n' +
        '})\n'
      }
    </pre>
  </div>
)

// DONE 2.3 区分请求和响应作用域

class API extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showExampleJQuery: false
    }
  }
  render () {
    return (
      <section className='APIList'>
        <div className='header'>
          <span className='title'>接口说明</span>
        </div>
        <div className='body'>
          <div className='API'>
            <div className='title'>Mock地址：<span><code>{serve}/app/mock/[RepositoryID]/[API-URL]</code></span></div>
            <ul>
              <li>例如，<a href='http://rest.mock.emulian.com/app/mock/16/na/g/one/test.service' target='_blank'><code>{serve}/app/mock/16/na/g/one/test.service</code></a></li>
              <li>其中<code>"{serve}/app/mock/"</code>为固定前缀地址，<code>"16"</code>为[仓库ID]，<code>"na/g/one/test.service"</code>为接口定义的[地址]</li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>仓库-模块-接口定义</div>
            <ul>
              <li>【仓库】命名与产品线名称相同，或与项目名称相同，使用字母缩写，例如<code>mcmt</code>、<code>mlzx</code>、<code>dcredit</code>、<code>fadmin</code>。</li>
              <li>【模块】命名使用中文名称+后端模块名称，例如<code>木联账户[EmuAccount]</code>、<code>平安支付[EmuPinan]</code>，每个模块包含具有紧密业务联系的接口，便于查找。</li>
              <li>【接口】命名应体现该API的功能，例如<code>添加运踪订单</code>、<code>查看运踪订单</code>；接口[地址]定义不以<code>“/”</code>开头，[类型]设置为<code>GET</code>或者<code>POST</code>，返回参数注意定义[生成规则]。</li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>获取仓库的完整数据（JSON）</div>
            <ul>
              <li><code>{serve}/repository/get?id=:repositoryId</code></li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>获取接口的完整数据（JSON）</div>
            <ul>
              <li><code>{serve}/interface/get?id=:interfaceId</code></li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>获取仓库的前端插件（JS）</div>
            <ul>
              <li><span className='label'>基础插件</span><code>{serve}/app/plugin/:repositories</code></li>
              <li><span className='label'>jQuery 插件</span><code>{serve}/libs/jquery.rap.js</code><a href='#' className='btn btn-secondary btn-sm ml8' onClick={
                e => {
                  e.preventDefault()
                  this.setState((prevState, props) => {
                    return { showExampleJQuery: !prevState.showExampleJQuery }
                  })
                }
              }>用法</a></li>
              { this.state.showExampleJQuery && <ExampleJQuery /> }
              <li><span className='label'>Mock.js 插件</span><code>{serve}/libs/mock.rap.js</code></li>
              <li><span className='label'>fetch 插件</span><code>{serve}/libs/fetch.rap.js</code></li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>获取单个接口的数据（JSON）</div>
            <ul>
              <li>
                <code>{serve}/app/mock/data/:interfaceId?scope=response|request</code>
                <table className='table table-bordered mt12'>
                  <thead>
                    <tr>
                      <th width='140'><code>scope</code></th>
                      <th>描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>response</code></td>
                      <td>获取单个接口的响应数据（JSON）</td>
                    </tr>
                    <tr>
                      <td><code>request</code></td>
                      <td>获取单个接口的请求数据（JSON）</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li><code>{serve}/app/mock/:repositoryId/:method/:url</code></li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>获取单个接口的模板（JSON）</div>
            <ul>
              <li>
                <code>{serve}/app/mock/template/:interfaceId?scope=response|request</code>
                <table className='table table-bordered mt12'>
                  <thead>
                    <tr>
                      <th width='140'><code>scope</code></th>
                      <th>描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>response</code></td>
                      <td>获取单个接口的响应模板（JSON）</td>
                    </tr>
                    <tr>
                      <td><code>request</code></td>
                      <td>获取单个接口的请求模板（JSON）</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          <div className='API'>
            <div className='title'>获取单个接口的模板（JSON Schema）</div>
            <ul>
              <li>
                <code>{serve}/app/mock/schema/:interfaceId?scope=response|request</code>
                <table className='table table-bordered mt12'>
                  <thead>
                    <tr>
                      <th width='140'><code>scope</code></th>
                      <th>描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>response</code></td>
                      <td>获取单个接口的响应模板（JSON Schema）</td>
                    </tr>
                    <tr>
                      <td><code>request</code></td>
                      <td>获取单个接口的请求模板（JSON Schema）</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default API
