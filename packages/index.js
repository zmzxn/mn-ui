// 用于导出所有的组件
import Button from './button'

// 按需引入
export { Button };

const components = [ Button ]; // 使用对象而不是数组

const install = (App) => {
	// 遍历组件对象并注册
	components.forEach((item) => {
		App.component(item.name, item);
	});
};

export default { install };