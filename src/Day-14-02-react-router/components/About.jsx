import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div>About</div>
      <button onClick={() => {navigate('order-summary')}}>order</button>
      <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, commodo vitae pulvinar at, vehicula vel nulla. Pellentesque cursus sapien ut feugiat fringilla. Fusce ullamcorper, purus nec dapibus feugiat, risus sapien hendrerit ante, nec condimentum elit urna sed libero. Fusce tincidunt metus id augue finibus, sit amet hendrerit erat lacinia. Ut vulputate in arcu et blandit. Duis tellus ex, feugiat sed sapien et, pharetra hendrerit quam. Morbi pellentesque blandit nisl eget vestibulum. Aenean et ex lectus. Cras feugiat interdum arcu, in consequat nisl fringilla vitae. Fusce pellentesque justo ut posuere dictum. Suspendisse id viverra lectus. Duis sed nisl turpis.</p>

      <p>Aliquam erat volutpat. Proin ultricies eu dui a ultricies. Donec eget lectus vitae orci pretium vulputate. Quisque eu congue velit. Etiam ac ornare ante. Integer vel neque massa. Morbi posuere nulla ut nisi cursus, at tempor libero cursus. Maecenas accumsan suscipit pharetra. Nullam justo lectus, porta a iaculis ut, gravida id ante. Nunc commodo augue aliquet dignissim dignissim. Integer molestie, orci eu gravida luctus, risus dui semper purus, et feugiat dolor ex vitae magna. Donec laoreet pulvinar vestibulum. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <p>Donec porttitor, metus a condimentum tristique, elit quam maximus turpis, et mollis arcu turpis aliquam augue. Fusce sed facilisis diam. Vestibulum non rhoncus urna. Cras tempor iaculis nibh, in rhoncus elit posuere eget. Nulla sed ligula vitae sem ultricies fringilla nec a eros. Cras id nibh at sapien ultricies maximus sit amet at neque. In pretium magna ut lacus pellentesque dignissim. Donec non efficitur nibh. Integer rhoncus egestas arcu eget dictum. Nulla egestas dictum accumsan. In eleifend dolor dignissim neque pellentesque, in sollicitudin nulla rutrum.</p>

      <p>Donec ut porta enim. Proin rhoncus, ante quis sodales maximus, neque est suscipit diam, et accumsan nibh ipsum finibus quam. Nam lorem risus, rhoncus mollis pharetra eget, consectetur nec eros. Sed quis tristique nunc. Nunc non augue imperdiet, convallis diam sodales, euismod urna. Duis ipsum est, tincidunt in velit sed, auctor pellentesque ante. Pellentesque volutpat sem in quam tincidunt rhoncus. Praesent dapibus sit amet magna et fringilla. Aenean commodo, velit a pretium tempor, elit nunc tincidunt nulla, a volutpat est risus eget mi.</p>

      <p>Nullam luctus fringilla libero non tincidunt. Aenean interdum, ipsum non pretium eleifend, nunc lorem bibendum ex, quis maximus urna nulla ut nulla. Vivamus placerat aliquam tortor, id convallis magna feugiat a. Curabitur pulvinar sed ante eu sollicitudin. Fusce odio odio, efficitur et enim facilisis, facilisis congue augue. Nunc vel malesuada purus, vel vehicula eros. Aenean luctus urna leo, eu commodo sem hendrerit scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis scelerisque, est sed blandit hendrerit, tellus massa venenatis nisl, volutpat suscipit turpis risus at tellus. Phasellus dapibus purus sit amet leo maximus, at viverra risus iaculis. Fusce eu neque convallis, iaculis lorem eget, molestie nisi. Praesent dolor nisi, consequat non hendrerit et, pellentesque eget nisi. Morbi interdum, risus in consequat venenatis, elit nulla rutrum lacus, eget finibus purus diam id metus. Donec neque libero, auctor a scelerisque sed, blandit et justo. Aenean laoreet nulla vitae dolor scelerisque ultrices. Integer vel nulla placerat, faucibus ante ut, luctus eros.</p>

      <p>Aliquam erat volutpat. Phasellus ac metus orci. Nulla nec lorem lacinia justo egestas vulputate. Cras semper enim id diam sollicitudin, quis congue augue commodo. Ut a purus dictum, rutrum metus eget, bibendum augue. Morbi vitae justo ac ligula hendrerit porta et nec ante. Curabitur eleifend massa nec est vestibulum eleifend. Fusce laoreet pharetra pellentesque.</p>

      <p>Aliquam elit ante, euismod vitae maximus in, interdum a urna. Aliquam lacinia quam ut tortor finibus semper. Nam hendrerit, purus quis pulvinar porta, dui ligula sagittis augue, non cursus dolor arcu vel libero. Quisque nibh nibh, cursus eu velit vel, placerat pellentesque nunc. Quisque volutpat quis risus sit amet tempor. Nam aliquam leo vitae elit faucibus interdum. Vestibulum feugiat, nisl ullamcorper fermentum faucibus, felis urna egestas nisl, vel fringilla mauris sem in risus.</p>

      <p>Ut auctor, dui eu posuere porttitor, quam felis euismod eros, sit amet lobortis sem tortor at urna. Donec aliquam cursus ex. Phasellus ultricies enim sit amet porttitor ultrices. Maecenas scelerisque semper finibus. Integer erat nisl, efficitur non vehicula et, efficitur eget dolor. Integer nisi lectus, ultrices ut mauris in, pellentesque volutpat libero. Sed laoreet lectus lectus, ac dictum augue suscipit eget. Phasellus quis mollis quam. Proin bibendum elit a dignissim sagittis. Praesent condimentum urna vitae augue ultricies, sed accumsan nunc gravida. Fusce maximus at ex sed maximus. Ut vitae nulla nisl.</p>

      <p>Mauris fermentum purus sit amet eros porttitor, non egestas neque tempor. Praesent condimentum sagittis ligula. Vivamus tortor dolor, cursus vel tincidunt a, vehicula at sem. Sed iaculis mattis nisi. Suspendisse imperdiet hendrerit augue, et lobortis enim rutrum eu. Phasellus at vehicula ex. Ut et quam elit. Pellentesque congue fermentum pellentesque. Ut sit amet risus ut tortor semper suscipit a a felis. Duis tristique ultrices justo, quis tristique risus consequat nec. Suspendisse non felis scelerisque, mattis ligula non, sagittis libero. Vestibulum vitae mattis nisi.</p>

      <p>Nam dignissim consectetur neque, sit amet vehicula lectus sagittis ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id mollis est, et interdum quam. Sed commodo erat sit amet molestie commodo. Curabitur porta a dolor in tincidunt. Praesent egestas ante vitae porttitor varius. Nunc iaculis fermentum dolor, at feugiat mi vulputate ac. Nullam accumsan congue eros in euismod. Aenean porttitor, lacus nec iaculis tincidunt, lectus arcu maximus massa, at maximus metus est in diam. In quis sodales dui, sit amet ultrices felis. Maecenas dictum eget ligula sed blandit. Fusce sed velit ut turpis tempor rutrum. Vivamus porta felis in turpis volutpat, et vulputate tellus dictum. Etiam fermentum, arcu in porta tempor, augue ante semper dui, ac imperdiet nibh nunc eget ante. Nullam consectetur, lectus eu tincidunt sollicitudin, nunc enim hendrerit urna, eget malesuada justo lacus vitae magna. Sed in pellentesque quam.</p>

      <p>Sed diam augue, sollicitudin non rutrum ac, finibus in eros. Donec ultrices aliquet mattis. In quis egestas dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nec nulla lectus. Fusce egestas lectus non dolor bibendum, ut lacinia ex commodo. Praesent nulla elit, interdum ut eros sodales, laoreet finibus urna. Nullam elementum ligula non pretium finibus. Donec consequat eros hendrerit justo mattis, at hendrerit lorem tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>

      <p>Sed nulla eros, blandit in nunc eu, fringilla sagittis lectus. In iaculis ultricies magna cursus tincidunt. Sed nec cursus ligula. Suspendisse nec libero non nisl iaculis lacinia. Nulla dignissim risus tellus, quis cursus ex accumsan id. Nulla molestie dui quis cursus varius. Integer libero dui, luctus sit amet tristique a, consectetur in lacus. Nullam dictum magna vel tellus interdum, vitae tincidunt dui cursus. Vivamus sit amet tempus orci. Duis tempor convallis enim eu sodales. Proin tempus nisi id mi porta, ac malesuada urna ornare. In vehicula, nunc et porta convallis, tellus felis vestibulum massa, mollis ullamcorper augue metus eu elit. Ut mollis leo tempor nunc commodo, eu ultricies eros bibendum. Mauris congue porttitor ipsum, eu ultricies massa ultricies sed.</p>

      <p>Phasellus id quam rhoncus, ornare erat egestas, accumsan velit. Nunc elementum turpis a sem pellentesque maximus a ut mauris. In sollicitudin lorem sit amet tortor accumsan, vitae venenatis justo gravida. Donec eu risus sem. Praesent euismod congue risus, in semper massa faucibus ut. Cras porttitor sapien et orci fringilla blandit. Fusce mi nisl, consequat in est id, vestibulum tristique orci. Fusce ullamcorper tortor at ante mattis fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis mattis ligula. Curabitur accumsan vehicula eros. Maecenas placerat leo quis consectetur rhoncus. Quisque id commodo diam, non volutpat nibh. In ac pretium quam.</p>

      <p>Nulla euismod gravida enim quis pulvinar. Suspendisse potenti. Curabitur ultricies quis felis non scelerisque. Nam arcu odio, viverra vestibulum vehicula et, elementum et massa. Integer quam lectus, fringilla ac lacinia quis, placerat ut nulla. Donec in justo condimentum tortor ullamcorper gravida. Cras a ullamcorper ligula, a ultrices ante. Integer cursus, purus eget egestas fringilla, dui leo laoreet ante, et vestibulum enim velit nec lorem. Vestibulum scelerisque urna in est vehicula cursus. Integer ut nulla vitae velit imperdiet fringilla sed quis nisl. Pellentesque volutpat ornare sodales. Morbi eget urna blandit, sodales mauris in, dictum leo.</p>

      <p>Etiam eget urna vitae erat ornare volutpat ut non eros. Mauris a congue mi. Integer at pellentesque dui. Suspendisse ut posuere velit, vitae porttitor tellus. Phasellus consectetur semper nisi ut convallis. Proin tincidunt libero vehicula convallis vehicula. Suspendisse leo erat, tempor eu enim vitae, semper tincidunt sapien. Fusce sit amet justo rutrum, volutpat augue ac, iaculis metus. Proin ac rhoncus erat. Nullam lobortis ullamcorper tellus id elementum. Nullam tincidunt tortor quis blandit euismod. Maecenas tincidunt pretium placerat. Fusce interdum ut elit quis vulputate. In feugiat tellus ut libero varius blandit.</p>

      <p>In ornare neque turpis, eget bibendum lectus commodo et. Nulla ut tincidunt urna. Vestibulum et sollicitudin leo. In hac habitasse platea dictumst. Nulla finibus commodo arcu eget hendrerit. Quisque commodo condimentum vulputate. Phasellus massa lacus, pellentesque ut neque et, egestas convallis urna. Aliquam erat volutpat. Aenean et magna vitae augue dapibus tristique nec at lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta massa ut arcu finibus, eu semper orci placerat. Etiam vitae malesuada dolor. Nulla ac tellus tincidunt, pretium ex eu, vestibulum dolor. Nulla sit amet imperdiet elit, ut gravida dui. Morbi eu pharetra felis, eu vulputate nulla.</p>

      <p>Praesent ac nulla vel erat sagittis varius. Aenean sed dapibus quam, dapibus semper mi. Proin volutpat, nunc at pellentesque mattis, diam mi eleifend metus, non elementum odio nisi ut sapien. Aliquam erat volutpat. Mauris facilisis mi sit amet lorem consequat, eget convallis justo cursus. Donec porttitor eu arcu sed cursus. Proin aliquet dignissim tellus, quis bibendum lectus fringilla nec. Fusce elementum nulla fringilla, congue lacus sit amet, porta erat. Proin eleifend a elit interdum consequat. Curabitur ut ultricies felis. Vestibulum mollis felis ut nisi blandit, in tempor massa vulputate. Phasellus commodo tristique laoreet. In hac habitasse platea dictumst. Morbi viverra dui enim, ut vulputate quam rhoncus tincidunt.</p>

      <p>Vivamus mollis risus at lorem fringilla, in vulputate dui interdum. Morbi vitae sodales metus, ac gravida quam. Vivamus ut tellus sollicitudin, congue lacus sed, accumsan orci. Vestibulum tellus eros, placerat eget justo ut, laoreet viverra sapien. Donec mollis pellentesque nunc, fringilla bibendum dolor condimentum vitae. Integer interdum at lacus non semper. Maecenas a malesuada lorem. In pellentesque vehicula arcu sed porta. Aliquam posuere tortor enim, nec volutpat leo ultricies ut.</p>

      <p>Nunc vitae consequat sapien. In sed ante eu enim ultrices consequat nec eget leo. Ut euismod pulvinar vehicula. Etiam non nisi tincidunt, vestibulum orci eu, placerat est. Nam dignissim pretium pretium. Morbi accumsan, lorem in tincidunt hendrerit, nibh dui porttitor nunc, commodo congue nunc nunc id erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut ante hendrerit turpis volutpat viverra. Donec interdum rutrum maximus. Cras euismod tempus orci. Quisque varius justo venenatis nisl finibus eleifend. Donec pellentesque odio finibus vestibulum tincidunt.</p>

      <p>Duis cursus massa sit amet tortor feugiat, vel posuere mi pulvinar. Proin vitae ultricies dui, condimentum placerat arcu. Donec et lacinia nibh. Sed non imperdiet orci. Donec rutrum nec massa id venenatis. Maecenas tempus nulla ac dapibus bibendum. Vestibulum id viverra ante.</p>
      </div>
    </>
  )
}

export default About