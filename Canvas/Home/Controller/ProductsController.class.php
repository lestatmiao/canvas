<?php
/**
 * Created by PhpStorm.
 * User: Lestatlee
 * Date: 2015/11/20
 * Time: 15:46
 * E-mail: 2007lixiao@gmail.com
 * QQ: 1239994760
 */

namespace Home\Controller;
use Think\Controller;
class ProductsController extends Controller{
    public function lists(){
        $this->display('Home:products');
    }
}