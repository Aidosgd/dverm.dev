<?php
class ControllerInformationInteriorDoor extends Controller {

	public function index() {
		$this->load->language('information/interior_door');

        // styles
        $this->document->addStyle('/catalog/view/theme/default/interior_assets/css/jquery-ui.css');
        $this->document->addStyle('/catalog/view/theme/default/interior_assets/css/cs-select.css');
        $this->document->addStyle('/catalog/view/theme/default/interior_assets/css/cs-skin-border.css');
        $this->document->addStyle('/catalog/view/theme/default/interior_assets/css/style.css');
        // js
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/jquery-ui.js');
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/jquery.transform3d.js');
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/jquery.transformable.js');
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/jquery.uploadPreview.min.js');
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/nouislider.min.js');
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/selectFx.js');
        $this->document->addScript('/catalog/view/theme/default/interior_assets/js/main.js');

        // door model
        $this->load->model('catalog/category');

        $this->load->model('catalog/product');

        $this->load->model('tool/image');

        $category_id = 59;

        $category_info = $this->model_catalog_category->getCategory($category_id);

        if ($category_info) {

            if ($category_info['image']) {
                $data['thumb'] = $this->model_tool_image->resize($category_info['image'], $this->config->get($this->config->get('config_theme') . '_image_category_width'), $this->config->get($this->config->get('config_theme') . '_image_category_height'));
            } else {
                $data['thumb'] = '';
            }

            $url = '';

            $data['categories'] = array();

            $results = $this->model_catalog_category->getCategories($category_id);

            foreach ($results as $result) {
                $filter_data = array(
                    'filter_category_id'  => $result['category_id'],
                    'filter_sub_category' => true
                );

                $data['categories'][] = array(
                    'name' => $result['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
                    'href' => $this->url->link('product/category', 'path=' . $this->request->get['path'] . '_' . $result['category_id'] . $url)
                );
            }

            $data['products'] = array();

            $filter_data = array(
                'filter_category_id' => $category_id,
            );

            $product_total = $this->model_catalog_product->getTotalProducts($filter_data);

            $results = $this->model_catalog_product->getProducts($filter_data);

            foreach ($results as $result) {

                $data['products'][] = array(
                    'product_id'  => $result['product_id'],
                    'thumb'       => $result['image'],
                    'name'        => $result['name'],
                    'href'        => $this->url->link('product/product', 'path=59&product_id=' . $result['product_id'] . $url)
                );
            }
        }

		$this->document->setTitle($this->language->get('heading_title'));

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home')
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('information/contact')
		);

		$data['heading_title'] = $this->language->get('heading_title');

		$data['locations'] = array();

		$this->load->model('localisation/location');

		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

		$this->response->setOutput($this->load->view('information/interior_door', $data));
	}
}
