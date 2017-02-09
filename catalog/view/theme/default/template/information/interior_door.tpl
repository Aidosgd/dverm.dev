<?php echo $header; ?>
<div class="container">
  <ul class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
    <?php } ?>
  </ul>
  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>"><?php echo $content_top; ?>
      <h1><?php echo $heading_title; ?></h1>
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="door__js">
            <div class="interiero">
              <div id="fabHead">Выберите интерьер из списка:
              </div>
              <div id="intWarp">
                <img class="uploadInter" src="/image/interier/10.jpg">
                <img class="uploadInter" src="/image/interier/11.jpg">
                <img class="uploadInter" src="/image/interier/12.jpg">
                <img class="uploadInter" src="/image/interier/14.jpg">
                <img class="uploadInter" src="/image/interier/20.jpg">
                <img class="uploadInter" src="/image/interier/22.jpg">
                <img class="uploadInter" src="/image/interier/27.jpg">
                <img class="uploadInter" src="/image/interier/28.jpg">
                <img class="uploadInter" src="/image/interier/29.jpg">
                <img class="uploadInter" src="/image/interier/3.jpg">
                <img class="uploadInter" src="/image/interier/30.jpg">
                <img class="uploadInter" src="/image/interier/35.jpg">
                <img class="uploadInter" src="/image/interier/36.jpg">
                <img class="uploadInter" src="/image/interier/37.jpg">
                <img class="uploadInter" src="/image/interier/38.jpg">
                <img class="uploadInter" src="/image/interier/39.jpg">
                <img class="uploadInter" src="/image/interier/40.jpg">
                <img class="uploadInter" src="/image/interier/44.jpg">
                <img class="uploadInter" src="/image/interier/9.jpg">
                <img class="uploadInter" src="/image/interier/47.jpg">
                <img class="uploadInter" src="/image/interier/5.jpg">
                <img class="uploadInter" src="/image/interier/4.jpg">
                <img class="uploadInter" src="/image/interier/42.jpg">
                <img class="uploadInter" src="/image/interier/46.jpg">
                <img class="uploadInter" src="/image/interier/49.jpg">
                <img class="uploadInter" src="/image/interier/51.jpg">
              </div>
            </div>
            <div class="blockz">
              <div class="fon" style="filter: blur(0px) brightness(100%) contrast(100%) opacity(100%) saturate(100%);"></div>
              <div class="container_door boxy ui-draggable ui-draggable-handle ui-resizable"
                   style="background: url(image/begin.jpg);position: relative;">
                <div class="reset"></div>
              </div>

              <img class="confaImg magictime" src="/image/options.png">

              <div class="confa magictime">
                <div class="optTop">Настройки отображения<img class="closeImg" src="/image/close.png"></div>
                <div class="optMain">
                  <div class="wrapper-demo">
                    <ul class="dropdown">
                      <li><input type="checkbox" id="el-1" name="el-1" value="shadow_o"><label for="el-1">Включить
                          тень у двери</label></li>
                      <li><input type="checkbox" id="el-3" name="el-3" value="flip_o"><label for="el-1">Отразить фон
                          горизонтально</label></li>
                      <li class="rangers"><label>Изменить яркость фона</label>

                        <div id="slider-bright" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                          <div class="noUi-base">
                            <div class="noUi-origin noUi-background" style="left: 50%;">
                              <div class="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="rangers"><label>Изменить контрастность фона</label>

                        <div id="slider-contra" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                          <div class="noUi-base">
                            <div class="noUi-origin noUi-background" style="left: 50%;">
                              <div class="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="rangers"><label>Изменить насыщенность фона</label>

                        <div id="slider-satur" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                          <div class="noUi-base">
                            <div class="noUi-origin noUi-background" style="left: 50%;">
                              <div class="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="rangers"><label>Изменить прозрачность фона</label>

                        <div id="slider-opac" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                          <div class="noUi-base">
                            <div class="noUi-origin noUi-background noUi-stacking" style="left: 100%;">
                              <div class="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="rangers"><label>Изменить размытие фона</label>

                        <div id="slider-blur" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                          <div class="noUi-base">
                            <div class="noUi-origin noUi-background" style="left: 0%;">
                              <div class="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="clearOpt">Сбросить настройки</div>
                    ​
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fabinfo">Затем выберите одну из дверей, и она появится в интерьере</div>
          <center>
            <div id="existingImges">
              <?php foreach($products as $product){ ?>
                <img class="uploadImage"
                     data-url="<?php echo $product['href']; ?>"
                     data-name="<?php echo $product['name']; ?>"
                     src="/image/<?php echo $product['thumb']; ?>">
              <?php } ?>
            </div>
          </center>
        </div>
      </div>
      <?php echo $content_bottom; ?></div>
    <?php echo $column_right; ?></div>
</div>
<?php echo $footer; ?>
