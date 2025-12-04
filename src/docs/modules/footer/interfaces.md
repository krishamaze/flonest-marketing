# Footer Module – Interface Specification

## Required HTML Structure

```html
<!-- BEGIN:FOOTER -->
<footer class="site-footer">
  <div class="footer-brand">
    <!-- Logo or name -->
  </div>

  <div class="footer-legal">
    <p>GSTIN: 33CPXPK3822A2ZZ</p>
    <p>Registered Address: SHOP NO.F6, DOOR NO.181/12, CHERAN PLAZA, PALAKKAD MAIN ROAD, ETTIMADAI PIRIVU, COIMBATORE – 641112, Tamil Nadu, India</p>
  </div>

  <div class="footer-nav">
    <ul>
      <li><a href="/privacy-policy.html">Privacy Policy</a></li>
      <li><a href="/terms-and-conditions.html">Terms & Conditions</a></li>
      <li><a href="/contact-us.html">Contact</a></li>
    </ul>
  </div>
</footer>
<!-- END:FOOTER -->
```

## Mandatory Sections

| Class / Element | Purpose             | Notes                   |
| --------------- | ------------------- | ----------------------- |
| `.site-footer`  | root wrapper        | must exist exactly once |
| `.footer-brand` | brand or logo       | static only             |
| `.footer-legal` | GSTIN + address     | required                |
| `.footer-nav`   | internal links only | no external URLs        |

## Explicit Prohibitions

* No `<script>` allowed in this module.
* No social media share scripts.
* No dynamic rendering or AJAX.
* Must work with JS disabled.
