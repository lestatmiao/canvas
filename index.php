<?php
/**
 * Created by PhpStorm.
 * User: Lestatlee
 * Date: 2015/11/17
 * Time: 21:21
 */
//核心入口文件
header('Content-Type:text/html;charset=utf-8');
//定义项目目录
define('APP_PATH','./Canvas/');
//开启调试模式
define('APP_DEBUG','true');
//载入tp入口文件
require './ThinkPHP/ThinkPHP.php';