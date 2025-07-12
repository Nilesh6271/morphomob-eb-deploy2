import React from 'react';

const EnterpriseSlaPage: React.FC = () => (
  <div className="bg-white min-h-screen py-16 px-4 sm:px-8 lg:px-48">
    <h1 className="text-4xl font-bold mb-8 text-center">ENTERPRISE SERVICE LEVEL AGREEMENT (SLA)</h1>
    <p className="mb-4 text-gray-700"><strong>Effective Date:</strong> [Insert Date]</p>
    <p className="mb-4 text-gray-700"><strong>Company:</strong> MorphoMob Infra Solutions, hereinafter referred to as “the Company”.</p>
    <p className="mb-8 text-gray-700">This Enterprise Service Level Agreement (“Agreement” or “SLA”) is entered into by and between the Company and the Client (“Customer” or “Client”), and forms an integral part of the contractual relationship arising from the Client’s engagement with the Company for the rental of equipment and/or the procurement of construction materials. This SLA defines the scope of services, expected performance standards, applicable exceptions, and remedies in the event of deviation from agreed service levels.</p>
    <ol className="list-decimal list-inside space-y-4 text-gray-700">
      <li>
        <strong>PURPOSE AND SCOPE</strong><br />
        The purpose of this SLA is to define the qualitative and quantitative performance standards expected from the Company in its provision of construction equipment rental services and construction material supply to enterprise clients. This Agreement applies to all orders and services explicitly covered under the Client’s work order, purchase order, or contractual agreement with the Company.<br />
        Unless otherwise agreed in writing, the SLA shall not extend to general or one-time retail transactions, consumer-level purchases, or third-party services not controlled or managed by the Company.
      </li>
      <li>
        <strong>SERVICE AVAILABILITY AND DELIVERY COMMITMENTS</strong><br />
        The Company shall endeavor to maintain an operational availability rate of not less than ninety-five percent (95%) for its core services, including dispatch, logistics coordination, and rental operations, subject to limitations imposed by external and uncontrollable events.<br />
        For standard, non-specialized equipment and readily available materials, the Company shall make reasonable efforts to fulfill delivery or dispatch requests within twenty-four (24) business hours from the time of confirmed order placement, excluding Sundays and public holidays.<br />
        However, the Company shall not be held liable for delivery or dispatch delays in any of the following exceptional circumstances:
        <ul className="list-disc list-inside ml-6">
          <li>When the requested equipment is classified as special-purpose machinery, custom-fabricated equipment, or non-standard inventory requiring lead time beyond 24 hours for inspection, mobilization, or transportation.</li>
          <li>When the delivery location is in a restricted access area, geographically remote site, or otherwise subject to logistical or regulatory limitations.</li>
          <li>In the event of force majeure, including but not limited to natural disasters, strikes, transport disruptions, labor unrest, pandemics, governmental restrictions, or political disturbances affecting the Company or its delivery agents.</li>
          <li>When the Client provides incomplete, inaccurate, or non-verifiable site information or fails to secure required access, permits, or readiness at the point of delivery.</li>
          <li>In cases of non-availability of personnel, especially for services that require Company operators, supervisors, or on-site specialists.</li>
        </ul>
        The Company shall, in all such instances, notify the Client in a timely manner and provide a revised estimated delivery or dispatch timeline, subject to mutual confirmation.
      </li>
      <li>
        <strong>RESPONSE TIME AND SUPPORT</strong><br />
        For operational queries, on-site issues, or service-related complaints raised by the Client, the Company shall adhere to the following response time targets during working hours:
        <ul className="list-disc list-inside ml-6">
          <li>Acknowledgment of service tickets or complaints within four (4) business hours from receipt.</li>
          <li>Assignment of a resolution agent or escalation to a qualified service representative within one (1) business day.</li>
          <li>Provision of technical advice, replacement dispatch, or on-site intervention (if contractually agreed) within a reasonable period, subject to equipment availability, site access, and nature of the complaint.</li>
        </ul>
        Where the nature of the service issue is such that it cannot be resolved remotely or requires third-party components, spares, or statutory clearance, the resolution time shall be extended accordingly and communicated to the Client without undue delay.
      </li>
      <li>
        <strong>SERVICE METRICS AND MONITORING</strong><br />
        The following parameters shall constitute the core performance metrics under this SLA:
        <ul className="list-disc list-inside ml-6">
          <li>Dispatch Fulfillment Rate: At least ninety-five percent (95%) of confirmed equipment/material dispatches shall be fulfilled within the agreed delivery window, excluding exceptional circumstances.</li>
          <li>Operational Uptime: Equipment supplied by the Company shall exhibit an operational uptime of not less than ninety-five percent (95%) during the rental period, assuming proper use and maintenance by the Client.</li>
          <li>Incident Response Rate: The Company shall respond to reported safety or mechanical incidents within twenty-four (24) hours of notification and initiate corrective measures thereafter, as per contractual commitments.</li>
        </ul>
        These metrics shall be tracked internally by the Company and may be reviewed with the Client at periodic intervals upon request.
      </li>
      <li>
        <strong>SERVICE CREDITS AND REMEDIES</strong><br />
        In the event of the Company’s failure to meet the committed service levels due to reasons within its control, and where such failure has a material and documented impact on the Client’s operations, the Client shall be entitled to seek service credits in the form of one of the following remedies, at the Company’s discretion:
        <ul className="list-disc list-inside ml-6">
          <li>A prorated adjustment or reduction of the rental charges corresponding to the downtime period.</li>
          <li>A waiver of delivery or logistics charges for the affected transaction.</li>
          <li>Provision of substitute equipment or expedited delivery, where feasible, at no additional cost.</li>
        </ul>
        Notwithstanding the foregoing, the Company’s total liability for SLA non-compliance shall not, under any circumstances, exceed the value of the specific invoice or work order to which the failure relates. Claims for service credits must be raised in writing within seven (7) calendar days from the date of occurrence, failing which the right to claim shall stand waived.
      </li>
      <li>
        <strong>EXCLUSIONS AND LIMITATIONS</strong><br />
        This SLA does not apply to:
        <ul className="list-disc list-inside ml-6">
          <li>Any failures or delays caused by the Client’s breach of contractual obligations, including but not limited to non-payment, site unpreparedness, misuse of equipment, or lack of access.</li>
          <li>Downtime or unavailability resulting from scheduled preventive maintenance, provided such maintenance is communicated in advance.</li>
          <li>Services or products sourced by the Company from external third-party vendors where the Company acts solely as a facilitating agent.</li>
        </ul>
        Furthermore, the SLA shall not create any implied warranty or additional liability beyond what is explicitly stated in the governing Terms of Service, Rental Agreement, or Material Supply Agreement.
      </li>
      <li>
        <strong>MODIFICATION AND REVIEW</strong><br />
        The Company reserves the right to amend or update this SLA periodically to reflect changes in service capabilities, industry standards, or legal requirements. Any modification shall become effective upon publication or formal written notice to the Client. Continued engagement with the Company shall be deemed acceptance of such modifications unless expressly objected to in writing within five (5) business days of notification.
      </li>
      <li>
        <strong>GOVERNING LAW AND DISPUTE RESOLUTION</strong><br />
        This SLA shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or in relation to this Agreement shall be resolved in accordance with the dispute resolution mechanism provided in the applicable Terms of Service or Master Services Agreement. In the absence of such agreement, disputes shall be submitted to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Mumbai, and the proceedings conducted in English. The courts of Mumbai shall have exclusive jurisdiction for all interim relief and enforcement actions.
      </li>
      <li>
        <strong>CONTACT INFORMATION</strong><br />
        For any clarification related to this SLA or to report a breach thereof, the Client may contact:<br />
        [Your Company Name]<br />
        [Registered Office Address]<br />
        Email: [Insert Email Address]<br />
        Phone: [Insert Contact Number]
      </li>
    </ol>
  </div>
);

export default EnterpriseSlaPage; 