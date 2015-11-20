<?php
/**
 * Created by PhpStorm.
 * User: Lestatlee
 * Date: 2015/11/19
 * Time: 18:49
 * E-mail: 2007lixiao@gmail.com
 * QQ: 1239994760
 */

namespace Home\Controller;
use Think\Controller;

class EmptyController extends Controller{
    public function _empty(){
        $this->display('Public:404');
    }
}