<?php
/**
 * Created by PhpStorm.
 * User: Lestatlee
 * Date: 2015/11/20
 * Time: 11:51
 * E-mail: 2007lixiao@gmail.com
 * QQ: 1239994760
 */

namespace Home\Controller;
use Think\Controller;
class ArticleController extends Controller{
    public function culture(){
        $this->display('Home:article-culture');
    }
    public function service(){
        $this->display('Home:article-service');
    }
    public function pay(){
        $this->display('Home:article-pay');
    }
}