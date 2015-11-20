<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<?php if(is_array($data)): foreach($data as $key=>$vo): echo ($vo['cid']); ?>--<?php echo ($vo['name']); ?><hr><?php endforeach; endif; ?>
{/index.php/Home/Goods}
</body>
</html>